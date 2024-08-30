package entity

type Brief struct {
	Username   string
	FirstName  string
	Profession string
	Country    string
	Tel        string
}

type Education struct {
	ScholeName     string
	Degree         string
	GraduationDate string
}

type Experience struct {
	CompanyName  string
	JobTitle     string
	StartDate    string
	EndDate      string
	Description  string
	Technologies []string
	Achievements []string
}

type Project struct {
	ProjectName  string
	Description  string
	Features     []string
	Technologies []string
	MainImage    string
	Images       []string
}

type Contact struct {
	Website string
	Link    string
}

type Portfolio struct {
	Brief
	About       string
	Educations  []Education
	Experiences []Experience
	Projects    []Project
	Contacts    []Contact
}
