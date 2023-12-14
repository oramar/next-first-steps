import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Estamo en pricing',
  description: 'Descripcion de pricing'
}
export default function pricingPage(){
  return(
    <>
    <span className="text-7xl">Pricing Page</span>
    </>
  )
}