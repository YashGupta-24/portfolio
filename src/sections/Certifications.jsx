function Certifications() {

    const data=[
        {
            name:"AWS Cloud Practitioner (CLF-CO2)",
            link:"https://drive.google.com/file/d/13xY1yyJJjCFR48icNPIb5wqUFTzEhvkM/view?usp=sharing",
            issue_date:"June 2025",
            expiry_date:"June 2028"
        },
        {
            name:"Azure Fundamentals (AZ-900)",
            link:"https://drive.google.com/file/d/11ubzgUOOzYxiq7u7QkTQNF4QkHQfLRNA/view?usp=sharing",
            issue_date:"June 2023",
            expiry_date:""
        }
    ]

    return (
        <div className='h-full w-3/4 flex flex-col transit'>
            <h1 className='text-3xl md:text-5xl my-5 font-heading text-heading'>Certifications</h1>
            <div className='grid sm:grid-cols-2 gap-8'>
                {
                    data.map((certificate, key)=>{
                        return(
                            <div>
                                <a href={certificate.link} className='text-md md:text-xl font-heading text-heading font-semibold'>{certificate.name}</a>
                                <div className="flex justify-between">
                                    <p className='text-[0.6rem] sm:text-base font-body font-semibold'>Valid From: {certificate.issue_date}</p>
                                    {
                                        certificate.expiry_date!=''?<p className='text-[0.6rem] sm:text-base font-body font-semibold'>Valid To: {certificate.expiry_date}</p>:<></>
                                    }
                                </div>
                                <hr className='border-[1px] border-heading'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Certifications
