import { getTime, getCurrentTime, changeTheme, setCurrentTime } from '../src/components/DarkLightMode/DarkLightSettingsFunctions'
const puppeteer = require('puppeteer')
const address = "http://localhost:3000/"
const headless = require('../browser.config')
let browser, page = null

jest.setTimeout(30000)

describe("Dark Mode Testing", () => {
    test("expect type of hour to be number", () => {
        const time = getCurrentTime()
        expect(typeof time).toBe("number")
    })

    test("expect set time to 3 working", () => {
        setCurrentTime(3)
        const time = getCurrentTime()
        expect(time).toBe(3)
    })

    test("expect theme to be set to dark at 20", () => {
        setCurrentTime(20)
        const time = getCurrentTime()
        const event = changeTheme()
        expect(event.target.value).toBe('dark')
    })

    test("expect theme to be set to dark at 18", () => {
        setCurrentTime(18)
        const time = getCurrentTime()
        const event = changeTheme()
        expect(event.target.value).toBe('dark')
    })

    test("expect theme to be set to light at 8", () => {
        setCurrentTime(8)
        const time = getCurrentTime()
        const event = changeTheme()
        expect(event.target.value).toBe('light')
    })
})

describe("Animation Testing", () => {
    test("expect place name to be displayed", async () => {
        await page.goto(address + "/details/Pearl")
        await page.waitForTimeout(1000)
        const button = await page.$('#clickMe')
        button.click()
        const result = await page.evaluate(() => document.getElementById("placeName"))    
        expect(result.innerText).toBe('The Pearl')
    })

    test("expect element to shake on click", async () => {
        await page.goto(address + "/details/Pearl")
        await page.waitForTimeout(1000)
        const element = await page.$('#card')
        element.click()
        const elementResult = await page.evaluate(() => document.getElementById("card"))    
        const result = elementResult.style.width === '100px' || elementResult.style.width === '150px'
        expect(result).toBe(true)
    })
})