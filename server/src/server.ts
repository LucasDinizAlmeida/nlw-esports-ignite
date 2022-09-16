import express from 'express';
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesNumberToHours } from './utils/convert-minutes-number-to-hours';

const app = express()
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()


app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  return res.json(games)
})

app.post('/game/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const newAd = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: newAd.name,
      yearsPlaying: newAd.yearsPlaying,
      discord: newAd.discord,
      weekDays: newAd.weekDays.join(','),
      hourStart: convertHourStringToMinutes(newAd.hourStart),
      hourEnd: convertHourStringToMinutes(newAd.hourEnd),
      useVoiceChannel: newAd.useVoiceChannel
    }
  })

  return res.json(ad)
})

app.get('/games/:id/ads', async (req, res) => {
  const gameId: any = req.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesNumberToHours(ad.hourStart),
      hourEnd: convertMinutesNumberToHours(ad.hourEnd)
    }
  }))
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return res.json({
    discord: ad.discord
  })
})


app.listen(3333, () => console.log('Server is rounnig'))