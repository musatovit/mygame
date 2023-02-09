export const loadCards = async (): Promise<any>  => {
    const res = await fetch('http://localhost:4000/api/card')
    return res.json()
}
//Promise<Cards[]>
