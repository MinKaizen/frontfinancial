import PropertyEquityForm from "@/components/forms/property-equity-form"

export function FormSection() {
  return (
    <>
      <div id="inquire_form" className="bg-[#383838]">
        <div className="px-5 py-12 lg:py-18 xl:py-24">
          <PropertyEquityForm />
        </div>
      </div>
    </>
  )
}
