// Задача: Автоматизировать на Cypress тест-кейс, 
// проверяющий успешную отправку формы с корректно заполненными данными и 
// отображение сообщения об успешной отправке. 

describe('testograf_testing', () => {

    it('success_form_sending', () => {

        cy.fixture("../fixtures/form_fixtures.json").then(fixtures => { //добавляю фикстуры

            cy.visit("/"); // ссылка на сайт в конфиге
            
            //здесь нахожу нужное поле и ввожу значения
            cy.get(fixtures.locators.name).click().type(fixtures.input_types.name); 
            cy.get(fixtures.locators.email).click().type(fixtures.input_types.email);
            cy.get(fixtures.locators.phone_number).click().type(fixtures.input_types.phone_number);

            // ниже будет 2 клика для появления выпадающего списка и выбора из выпадающего списка
            cy.get(fixtures.locators.appeal_purpose_locator).click();
            cy.get(fixtures.input_types.appeal_purpose_locator).click();

            cy.get(fixtures.locators.comment).click().type(fixtures.input_types.comment);

            cy.get(fixtures.locators.button).click(); // отправка формы

            // здесь проверка отображения сообщения об успешной отправке
            cy.contains(fixtures.success_form_sending_message).should("be.visible");

            cy.end;
        })
    })
  })

    