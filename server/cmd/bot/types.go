package bot

import tele "gopkg.in/telebot.v3"

type Tapp struct {
	Bot *tele.Bot
	WebAppUrl string
}

type User struct {
	ID           int    `json:"id" gorm:"primaryKey"`
	Telegram_id  int    `json:"telegram_id" gorm:"telegram_id"`
	LanguageCode string `json:"languageCode" gorm:"languageCode"`
	Username     string `json:"username" gorm :"username"`
}
