export default function get_code(){
    const link = {
        barcode: {
            type1: "https://asda/asda/sdasd"
        }
    }

    return {
        lettura_barcode: {
            linguaggio: {
                python: {
                    type1: `
                    #pip install requests
                    import requests
                    res = request.post(
                        url=${link.barcode.type1}
                        headers={
                            "Content-Type": "application/json",
                            "Autorization": "Bearer <apikey>",
                        },
                        json={
                            "file": "<fileByte>",
                            "titolo": "<titolo>",
                        }
                    )
                    if res.status_code == 200:
                        with open(yourPath, "wb") as f:
                            f.write(res.content)
                    else:
                        print(res.text)
                    `
                }
            }
        },
        mass_messaging: {
            linguaggio: {
                python: {
                    type1: `
                    #pip install requests
                    import requests
                    res = request.post(
                        url=${link.barcode.type1}
                        headers={
                            "Content-Type": "application/json",
                            "Autorization": "Bearer <apikey>",
                        },
                        json={
                            "file": "<fileByte>",
                            "titolo": "<titolo>",
                        }
                    )
                    if res.status_code == 200:
                        with open(yourPath, "wb") as f:
                            f.write(res.content)
                    else:
                        print(res.text)
                    `
                }
            }
        },
        price_scanner: {
            linguaggio: {
                python: {
                    type1: `
                    #pip install requests
                    import requests
                    res = request.post(
                        url=${link.barcode.type1}
                        headers={
                            "Content-Type": "application/json",
                            "Autorization": "Bearer <apikey>",
                        },
                        json={
                            "file": "<fileByte>",
                            "titolo": "<titolo>",
                        }
                    )
                    if res.status_code == 200:
                        with open(yourPath, "wb") as f:
                            f.write(res.content)
                    else:
                        print(res.text)
                    `
                }
            }
        },
    }
}
