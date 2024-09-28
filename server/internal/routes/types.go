package routes

import "tapp_server/cmd/bot"

type Handler struct {
	Bot       *bot.Tapp
	WebAppUrl string
}

