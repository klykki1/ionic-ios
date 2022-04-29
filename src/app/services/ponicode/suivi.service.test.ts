import * as suivi_service from "../suivi.service"
// @ponicode
describe("suivi_service.SuiviService.suiviAnnonce", () => {
    let inst: any

    beforeEach(() => {
        inst = new suivi_service.SuiviService()
    })

    test("0", () => {
        let result: any = inst.suiviAnnonce("Mouse")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = inst.suiviAnnonce("Bacon")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = inst.suiviAnnonce("Ball")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = inst.suiviAnnonce("Shoes")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = inst.suiviAnnonce("Hat")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = inst.suiviAnnonce("")
        expect(result).toMatchSnapshot()
    })
})
