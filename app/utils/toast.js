import Toast from "react-native-root-toast"
let toast;
/**
 * 冒一个时间比较短的Toast
 * @param content
 */
export const toastShort = (content) => {
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
        duration: Toast.durations.SHORT,  // toast显示时长
        position: Toast.positions.CENTER, // toast位置
        shadow: true,                    // toast是否出现阴影
        animation: true,                 // toast显示/隐藏的时候是否需要使用动画过渡
        hideOnPress: true,              // 是否可以通过点击事件对toast进行隐藏
        delay: 0 ,                       //  toast显示的延时
    });
};

/**
 * 冒一个时间比较久的Toast
 * @param content
 */
export const toastLong = (content) => {
    if (toast !== undefined) {
        Toast.hide(toast);
    }
    toast = Toast.show(content.toString(), {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0
    });
};