import { getTime, getCurrentTime, changeTheme, setCurrentTime } from '../src/components/DarkLightMode/DarkLightSettingsFunctions'

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