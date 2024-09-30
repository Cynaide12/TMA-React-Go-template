package middleware

import (
	"net/http"

	"github.com/rs/cors"
)

func CorsMiddleware(next http.Handler) http.Handler {
	return cors.New(cors.Options{
		AllowedOrigins: []string{"https://2158-176-213-226-82.ngrok-free.app"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},    
		AllowedHeaders: []string{"Authorization", "Content-Type"},              
	}).Handler(next)
}
