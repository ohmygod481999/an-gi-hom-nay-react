export const utils = {
    formatMoney: (money) =>
        new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(money),
    formatToISOTime: (timeString) => {
        const date = new Date();
        const [hour, minute] = timeString.split(":");
        date.setHours(parseInt(hour), parseInt(minute));
        const iso = date.toISOString();
        return iso.substring(11);
    },
    timetzToTimeString: (timetz) => {
        const iso = new Date(
            "1999-08-04T" + timetz.substring(0, timetz.length - 3) + "Z"
        );
        function pad(num) {
            if (num < 10) return `0${num}`;
            return num;
        }
        return `${pad(iso.getHours())}:${pad(iso.getMinutes())}`;
    },
    getLatLngFromString: (latlngString) => {
        const [lat, lng] = latlngString
            .substring(1, latlngString.length - 1)
            .split(",");
        return {
            lat: parseFloat(lat),
            lng: parseFloat(lng),
        };
    },
};
