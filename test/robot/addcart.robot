*** Settings ***
Documentation     Add product to cart.
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000
${BROWSER}        Chrome

*** Test Cases ***
Case 1
    Open Browser To Login Page
    Go To Shopping Page
    Go To Some Product Discription
    Select Some Size At Index    1
    Click Add Cart Button

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Title Should Be    Dalessio

Go To Shopping Page
    Click Link    xpath://a[text()='SHOP NOW']

Go To Some Product Discription
    Click Link    class:title

Select Some Size At Index
    [Arguments]    ${index}
    Select From List By Index    id:sizeSelection    ${index}

Click Add Cart Button
    Click Link    class:action


