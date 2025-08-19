function Certifications() {

    const data = [
        {
            name: "Aws Cloud Practitioner (CLF-CO2)",
            company: "AWS",
            link: "https://drive.google.com/file/d/13xY1yyJJjCFR48icNPIb5wqUFTzEhvkM/view?usp=sharing",
            issue_date: "June 2025",
            expiry_date: "June 2028"
        },
        {
            name: "Azure Fundamentals (AZ-900)",
            company: "Microsoft",
            link: "https://drive.google.com/file/d/11ubzgUOOzYxiq7u7QkTQNF4QkHQfLRNA/view?usp=sharing",
            issue_date: "June 2023",
            expiry_date: ""
        }
    ]

    return (
        <div className='h-full flex flex-col transit'>
            <h1 className='text-4xl md:text-6xl my-6 font-heading text-heading'>Certifications</h1>
            <div className=''>
                {
                    data.map((certificate, key) => {
                        return (
                            <div>
                                <div key={key} className='my-4'>
                                    <a href={certificate.link} className='my-3 text-xl font-semibold font-heading text-heading'>{certificate.name} | {certificate.company}</a>
                                    {
                                        certificate.expiry_date != "" ?
                                        <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{certificate.issue_date} - {certificate.expiry_date}</p>
                                        :
                                        <p className='my-6 text-sm sm:text-base font-body font-semibold text-justify'>{certificate.issue_date}</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Certifications
