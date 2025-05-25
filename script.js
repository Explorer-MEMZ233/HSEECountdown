const provinceDates = {
    // 华北地区
    beijing: new Date(2025, 5, 24, 8, 30, 0), // 北京
    tianjin: new Date(2025, 5, 23, 9, 0, 0), // 天津
    hebei: new Date(2025, 5, 21, 8, 0, 0), // 河北
    shanxi: new Date(2025, 5, 20, 8, 30, 0), // 山西
    neimenggu: new Date(2025, 5, 22, 9, 0, 0), // 内蒙古

    // 东北地区
    liaoning: new Date(2025, 5, 25, 8, 0, 0), // 辽宁
    jilin: new Date(2025, 5, 24, 9, 0, 0), // 吉林
    heilongjiang: new Date(2025, 5, 23, 8, 30, 0), // 黑龙江

    // 华东地区
    shanghai: new Date(2025, 5, 17, 9, 0, 0), // 上海
    jiangsu: new Date(2025, 5, 18, 8, 30, 0), // 江苏
    zhejiang: new Date(2025, 5, 19, 9, 0, 0), // 浙江
    anhui: new Date(2025, 5, 20, 8, 0, 0), // 安徽
    fujian: new Date(2025, 5, 21, 9, 0, 0), // 福建
    jiangxi: new Date(2025, 5, 22, 8, 30, 0), // 江西
    shandong: new Date(2025, 5, 20, 8, 0, 0), // 山东

    // 华中地区
    henan: new Date(2025, 5, 22, 8, 0, 0), // 河南
    hubei: new Date(2025, 5, 21, 9, 0, 0), // 湖北
    hunan: new Date(2025, 5, 23, 8, 30, 0), // 湖南

    // 华南地区
    guangdong: new Date(2025, 5, 26, 9, 0, 0), // 广东
    guangxi: new Date(2025, 5, 25, 8, 30, 0), // 广西
    hainan: new Date(2025, 5, 24, 9, 0, 0), // 海南

    // 西南地区
    chongqing: new Date(2025, 5, 19, 8, 30, 0), // 重庆
    sichuan: new Date(2025, 5, 20, 9, 0, 0), // 四川
    guizhou: new Date(2025, 5, 21, 8, 0, 0), // 贵州
    yunnan: new Date(2025, 5, 22, 9, 0, 0), // 云南
    xizang: new Date(2025, 5, 23, 8, 30, 0), // 西藏

    // 西北地区
    shaanxi: new Date(2025, 5, 20, 8, 0, 0), // 陕西
    gansu: new Date(2025, 5, 21, 9, 0, 0), // 甘肃
    qinghai: new Date(2025, 5, 22, 8, 30, 0), // 青海
    ningxia: new Date(2025, 5, 23, 9, 0, 0), // 宁夏
    xinjiang: new Date(2025, 5, 24, 8, 0, 0) // 新疆
};

function updateCountdown(targetDate) {
    const now = new Date();
    const timeLeft = targetDate - now;

    // 如果时间已过
    if (timeLeft <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('days - unit').textContent = '考试已开始';
        return;
    }

    const hoursLeft = timeLeft / (1000 * 60 * 60);
    const daysLeft = hoursLeft / 24;

    // 最后30天启用警示模式
    if (daysLeft <= 30) {
        document.body.classList.add('warning - mode');
    } else {
        document.body.classList.remove('warning - mode');
    }

    if (hoursLeft > 500) {
        // 500小时外只显示天数（大字号）
        const days = Math.floor(daysLeft);
        document.getElementById('days').textContent = days;
        document.getElementById('days - unit').textContent = '天';

        // 隐藏时分秒
        ['hours', 'hours - unit','minutes','minutes - unit','seconds','seconds - unit'].forEach(id => {
            document.getElementById(id).style.display = 'none';
        });

        // 放大天数显示
        document.getElementById('days').style.fontSize = '15vw';
        document.getElementById('days - unit').style.fontSize = '6vw';
    } /*else {
        // 500小时内显示完整时分秒
        let days, hours, minutes, seconds;
        if (isNaN(timeLeft)) {
            days = hours = minutes = seconds = 0;
            console.error('timeLeft的值无效，为NaN');
        } else {
            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        }

        console.log('timeLeft:', timeLeft);
        console.log('days:', days);
        console.log('hours:', hours);
        console.log('minutes:', minutes);
        console.log('seconds:', seconds);

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const hoursUnitElement = document.getElementById('hours - unit');
        const minutesUnitElement = document.getElementById('minutes - unit');
        const secondsUnitElement = document.getElementById('seconds - unit');

        if (daysElement && hoursElement && minutesElement && secondsElement &&
            hoursUnitElement && minutesUnitElement && secondsUnitElement) {
            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;

            ['hours', 'hours - unit','minutes','minutes - unit','seconds','seconds - unit'].forEach(id => {
                document.getElementById(id).style.display = 'inline';
            });

            daysElement.style.fontSize = '10vw';
            document.getElementById('days - unit').style.fontSize = '4vw';
        } else {
            console.error('未能找到一个或多个必需的DOM元素');
        }
    }*/

    // 每秒更新一次
    setTimeout(updateCountdown, 1000);
}



function updateUI(province) {
    const eventTitle = document.getElementById('eventTitle');
    const eventTitleEn = document.getElementById('eventTitleEn');
    let targetDate;
    switch (province) {
        case 'beijing':
            eventTitle.textContent = '距2025北京中考还剩';
            eventTitleEn.textContent = 'BEIJING HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.beijing;
            break;
        case 'tianjin':
            eventTitle.textContent = '距2025天津中考还剩';
            eventTitleEn.textContent = 'TIANJIN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.tianjin;
            break;
        case 'hebei':
            eventTitle.textContent = '距2025河北中考还剩';
            eventTitleEn.textContent = 'HEBEI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.hebei;
            break;
        case'shanxi':
            eventTitle.textContent = '距2025山西中考还剩';
            eventTitleEn.textContent = 'SHANXI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.shanxi;
            break;
        case 'neimenggu':
            eventTitle.textContent = '距2025内蒙古中考还剩';
            eventTitleEn.textContent = 'NEIMENGGU HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.neimenggu;
            break;
        case 'liaoning':
            eventTitle.textContent = '距2025辽宁中考还剩';
            eventTitleEn.textContent = 'LIAONING HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.liaoning;
            break;
        case 'jilin':
            eventTitle.textContent = '距2025吉林中考还剩';
            eventTitleEn.textContent = 'JILIN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.jilin;
            break;
        case 'heilongjiang':
            eventTitle.textContent = '距2025黑龙江中考还剩';
            eventTitleEn.textContent = 'HEILONGJIANG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.heilongjiang;
            break;
        case'shanghai':
            eventTitle.textContent = '距2025上海中考还剩';
            eventTitleEn.textContent = 'SHANGHAI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.shanghai;
            break;
        case 'jiangsu':
            eventTitle.textContent = '距2025江苏中考还剩';
            eventTitleEn.textContent = 'JIANGSU HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.jiangsu;
            break;
        case 'zhejiang':
            eventTitle.textContent = '距2025浙江中考还剩';
            eventTitleEn.textContent = 'ZHEJIANG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.zhejiang;
            break;
        case 'anhui':
            eventTitle.textContent = '距2025安徽中考还剩';
            eventTitleEn.textContent = 'ANHUI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.anhui;
            break;
        case 'fujian':
            eventTitle.textContent = '距2025福建中考还剩';
            eventTitleEn.textContent = 'FUJIAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.fujian;
            break;
        case 'jiangxi':
            eventTitle.textContent = '距2025江西中考还剩';
            eventTitleEn.textContent = 'JIANGXI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.jiangxi;
            break;
        case'shandong':
            eventTitle.textContent = '距2025山东中考还剩';
            eventTitleEn.textContent = 'SHANDONG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.shandong;
            break;
        case 'henan':
            eventTitle.textContent = '距2025河南中考还剩';
            eventTitleEn.textContent = 'HENAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.henan;
            break;
        case 'hubei':
            eventTitle.textContent = '距2025湖北中考还剩';
            eventTitleEn.textContent = 'HUBEI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.hubei;
            break;
        case 'hunan':
            eventTitle.textContent = '距2025湖南中考还剩';
            eventTitleEn.textContent = 'HUNAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.hunan;
            break;
        case 'guangdong':
            eventTitle.textContent = '距2025广东中考还剩';
            eventTitleEn.textContent = 'GUANGDONG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.guangdong;
            break;
        case 'guangxi':
            eventTitle.textContent = '距2025广西中考还剩';
            eventTitleEn.textContent = 'GUANGXI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.guangxi;
            break;
        case 'hainan':
            eventTitle.textContent = '距2025海南中考还剩';
            eventTitleEn.textContent = 'HAINAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.hainan;
            break;
        case 'chongqing':
            eventTitle.textContent = '距2025重庆中考还剩';
            eventTitleEn.textContent = 'CHONGQING HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.chongqing;
            break;
        case'sichuan':
            eventTitle.textContent = '距2025四川中考还剩';
            eventTitleEn.textContent = 'SICHUAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.sichuan;
            break;
        case 'guizhou':
            eventTitle.textContent = '距2025贵州中考还剩';
            eventTitleEn.textContent = 'GUIZHOU HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.guizhou;
            break;
        case 'yunnan':
            eventTitle.textContent = '距2025云南中考还剩';
            eventTitleEn.textContent = 'YUNNAN HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.yunnan;
            break;
        case 'xizang':
            eventTitle.textContent = '距2025西藏中考还剩';
            eventTitleEn.textContent = 'XIZANG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.xizang;
            break;
        case'shaanxi':
            eventTitle.textContent = '距2025陕西中考还剩';
            eventTitleEn.textContent = 'SHAANXI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.shaanxi;
            break;
        case 'gansu':
            eventTitle.textContent = '距2025甘肃中考还剩';
            eventTitleEn.textContent = 'GANSU HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.gansu;
            break;
        case 'qinghai':
            eventTitle.textContent = '距2025青海中考还剩';
            eventTitleEn.textContent = 'QINGHAI HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.qinghai;
            break;
        case 'ningxia':
            eventTitle.textContent = '距2025宁夏中考还剩';
            eventTitleEn.textContent = 'NINGXIA HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.ningxia;
            break;
        case 'xinjiang':
            eventTitle.textContent = '距2025新疆中考还剩';
            eventTitleEn.textContent = 'XINJIANG HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            targetDate = provinceDates.xinjiang;
            break;
        default:
            eventTitle.textContent = '距中考还剩';
            eventTitleEn.textContent = 'HIGH SCHOOL ENTRANCE EXAM COUNTDOWN';
            break;
    }
    
    updateCountdown(targetDate);
}


const provinceSelect = document.getElementById('provinceSelect');
provinceSelect.addEventListener('change', function() {
    const selectedProvince = this.value;
    updateUI(selectedProvince);
});

// 初始化显示北京的倒计时
updateUI('beijing');

// 点击全屏
document.addEventListener('click', function() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
});