package http

import (
	"github.com/gin-gonic/gin"
	PortfolioController "saidaitdriss.me/internal/controller/portfolio"
)

var PortfolioControllerInstance = PortfolioController.NewPortfolioController()

func RoutesHandler(group *gin.Engine) {
	group.GET("/", PortfolioControllerInstance.RenderHome)
	group.GET("/about", PortfolioControllerInstance.RenderAbout)
	group.POST("/work", PortfolioControllerInstance.RenderWork)
	group.POST("/contact", PortfolioControllerInstance.RenderContact)
}
