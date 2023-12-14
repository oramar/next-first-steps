import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Estamo en contact',
  description: 'Descripcion de contact'
}
export default function contactPage(){
  return(
    <>
    <span className="text-7xl">Contact Page</span>
    </>
  )
}