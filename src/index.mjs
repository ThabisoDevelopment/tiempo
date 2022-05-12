// full name and short name of months
const full_months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August','September', 'October', 'November', 'December']
const short_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// fullname and short name of the weekdays
const full_weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saterday']
const short_weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Defaut tiempo return date format
const defaultFormat = "DD-MM"

class DateTimeFormat {

    constructor(datetime=null, format=null) {
        this.format = format
        const date = new Date(datetime)
        this.year = date.getFullYear()
        this.month = date.getMonth()
        this.day_of_month = date.getDate()
        this.day_of_week = date.getDay()
        this.hour = date.getHours()
        this.minites = date.getMinutes()
        this.formation_assemble_date()
    }

    days(days_format) {
        if (days_format == 'DDD') return full_weekdays[this.day_of_week] +" "+ this.day_of_month
        if (days_format == 'DD') return short_weekdays[this.day_of_week] +" "+ this.day_of_month
        return this.day_of_month
    }

    months(month_format) {
        if (month_format == 'MMM') return full_months[this.month]
        if (month_format == 'MM') return short_months[this.month]
        return this.month
    }
    formaton_time() {
        return this.hour +":"+ this.minites
    }

    formation_assemble_date() {
        const format_list = this.format.split(/[\s-/\\]+/)
        this.display_date = this.days(format_list[0]) + "-"
        this.display_date += this.months(format_list[1]) + "-"
        this.display_date += this.year
    }

    get_full_date() {
        return {
            date: this.display_date,
            time: this.formaton_time()
        }
    }
}


export const getDate = (datetime, format=defaultFormat) => {
    const datetime_format = format.toString().toUpperCase()
    const dti = new DateTimeFormat(datetime, datetime_format)
    const date = dti.get_full_date()
    return date
}