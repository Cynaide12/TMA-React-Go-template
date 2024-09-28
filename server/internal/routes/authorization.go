package routes

import (
	"encoding/json"
	"net/http"
)

func Authorization(w http.ResponseWriter, r *http.Request, h *Handler) {
	validResponse := map[string]string{"valid": "true"}
	validJSON, _ := json.Marshal(validResponse)
	w.WriteHeader(http.StatusOK)
	w.Write(validJSON)
}
