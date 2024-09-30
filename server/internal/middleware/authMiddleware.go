package middleware

import (
	"fmt"
	"net/http"
	"strings"

	"time"

	tgauth "github.com/telegram-mini-apps/init-data-golang"
)

func AuthMiddleware(botToken string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			fmt.Print(r.Body)
			fmt.Print(r.Header.Get("Authorization"))
			data := strings.Split(r.Header.Get("Authorization"), " ")
			fmt.Print(r.Header.Get("Authorization"))
			if len(data) < 2 {
				w.WriteHeader(http.StatusUnauthorized)
				return
			} 
			// _ := data[0]
			authData := data[1]

			if err := tgauth.Validate(authData, botToken, time.Minute*1); err != nil {
				w.WriteHeader(http.StatusUnauthorized)
				w.Write([]byte(err.Error()))
				return
			}

			initData, err := tgauth.Parse(authData)
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
				w.Write([]byte(err.Error()))
				return
			}
			fmt.Print(initData)

			next.ServeHTTP(w, r)
		})
	}
}
