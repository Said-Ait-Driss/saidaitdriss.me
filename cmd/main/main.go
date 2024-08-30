package main

import (
	"html/template"
	"log"

	"github.com/gin-gonic/gin"
	handlers "saidaitdriss.me/pkg/transport/http"
)

// Define a struct to hold the data you want to pass to the template

func main() {
	router := gin.Default()

	router.Static("/public", "./public")

	router.SetFuncMap(template.FuncMap{})
	router.LoadHTMLGlob("views/*.html")

	handlers.RoutesHandler(router)

	const PORT = ":3000"
	log.Println("app listening at port", PORT)
	if err := router.Run(PORT); err != nil {
		log.Fatal(err)
	}
}
