const FormatCurrency = new Intl.NumberFormat(undefined,{
    currency:"UAE",
    style:"currency"
})

const currencyFormater = (numper) => {
    return FormatCurrency.format(numper)
}
export default currencyFormater