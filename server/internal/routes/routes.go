package routes

import (
	"net/http"
	"tapp_server/cmd/bot"
	auth "tapp_server/internal/middleware"

	"github.com/go-chi/chi/v5"
	// "github.com/rs/cors"
)

func NewRoutesHandler(bot *bot.Tapp) *Handler {
	return &Handler{
		Bot: bot,
	}
}

func (h *Handler)InitRoutes() {
	r := chi.NewRouter()

	r.Use(auth.CorsMiddleware, auth.AuthMiddleware(h.Bot.Bot.Token))

	r.Post("/tap_validate", func(w http.ResponseWriter, r *http.Request) {
		Authorization(w, r, h)
	})

	http.ListenAndServe(":8080", r)
}
