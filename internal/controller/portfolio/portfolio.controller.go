package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	portfolioService "saidaitdriss.me/internal/service/portfolio"
)

type PortfolioController struct {
	PortfolioControllerInstance *portfolioService.PortfolioService
}

func NewPortfolioController() *PortfolioController {
	return &PortfolioController{
		PortfolioControllerInstance: portfolioService.NewPortfolioService(),
	}
}

type PageData struct {
	Title   string
	Message string
}

func (controller *PortfolioController) RenderHome(c *gin.Context) {
	data := PageData{
		Title:   "Welcome",
		Message: "Hello, this is a message from the server!",
	}
	c.HTML(http.StatusOK, "index.html", data)
}

func (controller *PortfolioController) RenderWork(c *gin.Context) {

}

func (controller *PortfolioController) RenderAbout(c *gin.Context) {

}

func (controller *PortfolioController) RenderContact(c *gin.Context) {

}
