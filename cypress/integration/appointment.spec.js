describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });

  it("should book an interview", () => {
    cy.get("[alt=Add]").first().click();
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
    cy.get("[alt='Sylvia Palmer']").click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    // Visits the root of our web server
    // Clicks the edit button for the existing appointment
    // Changes the name and interviewer
    // Clicks the save button
    // Sees the edit to the appointment
  });

  it("should cancel an interview", () => {
    // Visits the root of our web server
    // Clicks the delete button for the existing appointment
    // Clicks the confirm button
    // Sees that the appointment slot is empty
  });
});
