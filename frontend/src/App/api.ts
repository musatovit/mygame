export const loadCards = async (): Promise<any>  => {
    console.log('qqqq')
    const res = await fetch('http://localhost:4000/api/card')
    console.log('qqq')
    return res.json()
}
//Promise<Cards[]>
