export const dateConvert = (date) => {
    const token2 = date.split('T');
    const dateToken = token2[0].split('-');
    const year = dateToken[0].split('"')


    switch (dateToken[1]) {
        case '01':
            dateToken[1] = '01';
            break;
        case '02':
            dateToken[1] = '02';
            break;
        case '03':
            dateToken[1] = '03';
            break;
        case '04':
            dateToken[1] = '04';
            break;
        case '05':
            dateToken[1] = '05';
            break;
        case '06':
            dateToken[1] = '06';
            break;
        case '07':
            dateToken[1] = '07';
            break;
        case '08':
            dateToken[1] = '08';
            break;
        case '09':
            dateToken[1] = '09';
            break;
        case '10':
            dateToken[1] = '10';
            break;
        case '11':
            dateToken[1] = '11';
            break;
        case '12':
            dateToken[1] = '12';
            break;
        default:
            dateToken[1] = 'Invalid Month';
    }
    return `${dateToken[2]}/${dateToken[1]}/${year[1]}`;
}

export const hourConvert = (hour) => {
    const convert = hour.split('T')
    const hourConvert = convert[1].split(".")
    return hourConvert[0];

}
export const applyMoneyBRL = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
export const applyMoneyInput = (value) => {
    let priceMask = new StringMask('#,##0.00', { reverse: true })

    if (value) {
        if (typeof value === 'number') {
            value = value.toString()
        }
        value = value.replace(/\D/g, '')
        value = parseFloat(value)

        if (value.length > 5) {
            priceMask = new StringMask('##0,00', { reverse: true })
        } else {
            priceMask = new StringMask('#.##0,00', { reverse: true })
        }

        return priceMask.apply(value)
    }
    return value
}
export const numberCelphone = (value) => {
    let celphone = new StringMask('(##) ####-####')

    if (value) {
        value = value.replace(/\D/g, '')
        return celphone.apply(value)
    }
    return value
}

export const applyCepMask = (value) => {
    let max = 8
    let cnpjMask = new StringMask('##.###-###')

    if (value) {
        value = value.replace(/\D/g, '')

        if (value && value.length > max) {
            value = value.substr(0, max)
        }

        return cnpjMask.apply(value)
    }
    return value
}
