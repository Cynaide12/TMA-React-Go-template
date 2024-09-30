package main

import (
	"tapp_server/cmd/bot"
	"tapp_server/internal/config"
	"tapp_server/internal/handlers"
	"tapp_server/internal/routes"

	tele "gopkg.in/telebot.v3"
)

func main() {
	cfg := config.MustLoad()
	Tapp := bot.Tapp{
		Bot:       bot.InitBot(cfg.BotToken),
		WebAppUrl: cfg.WebAppUrl,
	}

	initHandlers(&Tapp)
	routesHandler := routes.NewRoutesHandler(&Tapp)
	go routesHandler.InitRoutes()
	Tapp.Bot.Start()
	defer Tapp.Bot.Stop()
}

func initHandlers(Tapp *bot.Tapp) {
	chatHandler := handlers.NewChatHandler(Tapp)

	menu := tele.ReplyMarkup{}

	openAppBtn := Tapp.Bot.NewMarkup().WebApp("Открыть", &tele.WebApp{URL: Tapp.WebAppUrl})

	menu.Inline(menu.Row(openAppBtn))

	Tapp.Bot.Handle("/start", func(c tele.Context) error {
		return chatHandler.StartHandler(c, menu)
	})
	Tapp.Bot.Handle(tele.OnText, chatHandler.MessageHandler)
}
