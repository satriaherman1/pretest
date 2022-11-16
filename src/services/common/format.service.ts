class FormatService {
  currencyIDR(amount: number) {
    const formatAmount = new Intl.NumberFormat("id-ID", {
      currency: "IDR",
    }).format(amount);

    return formatAmount;
  }
}

export default FormatService;
