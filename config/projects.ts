export interface IProject {
    name:string
    detail:string
    logo?:string
    link:string
}
export const projects:IProject[] = [
    {
        name: "COLAB",
        detail : "โปรเจกต์ Colab คือเว็บฮับที่ออกแบบมาเพื่อเป็นตัวกลางที่เชื่อมต่อระหว่างผู้ร่วมลงทุนและผู้ใช้งานทั่วไปให้สามารถเข้าถึงและค้นหาพื้นที่ co-working space ที่ตรงกับความต้องการ โดยไม่เพียงแต่เป็นแค่ที่พักหรือลานทำงานที่ทุกคนสามารถเช่าใช้ได้เท่านั้น แต่ยังเป็นพื้นที่ที่เปิดโอกาสให้คนสามารถเข้ามาร่วมลงทุนในโครงการต่าง ๆ ที่เกี่ยวกับพื้นที่ทำงานร่วมกัน (co-working spaces) ได้อย่างง่ายดายและสะดวก",
        link : "https://github.com/Fuse441/colab-api"
    },
    {
        name: "COLAB2",
        detail : "เทส",
        link : "https://github.com/Fuse441/colab-api"
    },  {
        name: "COLAB3",
        detail : "เทส",
        link : "https://github.com/Fuse441/colab-api"
    }
]