export const utils = {
    formatMoney: (money) =>
        new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(money),
};
