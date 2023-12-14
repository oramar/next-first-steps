import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Estamo en about',
  description: 'Descripcion de about'
}
export default function AboutPage(){
  return(
    <>
    <span className="text-7xl">About Page</span>
    </>
  )
}