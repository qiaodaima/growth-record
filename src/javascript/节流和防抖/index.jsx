import React from 'react';
import cx from 'classnames';
import S from './style.less';

export default class extends React.Component {
    onTouchMove = () => {
        console.log('---');
    };

    render() {
        return (
            <div className={S.demoWrap}>
                <dl className={S.kkk}>
                    <dt></dt>
                    <dd></dd>
                </dl>

                <div onMouseMove={this.onTouchMove} className={S.demoItem}>
                    <p className={S.tips}>未节流</p>
                </div>

                <div onMouseMove={this.onTouchMove} className={S.demoItem}>
                    <p className={S.tips}>处理节流</p>
                </div>

                <div onMouseMove={this.onTouchMove} className={S.demoItem}>
                    <p className={S.tips}>未防抖</p>
                </div>

                <div onMouseMove={this.onTouchMove} className={S.demoItem}>
                    <p className={S.tips}>处理防抖</p>
                </div>
            </div>
        );
    }
}
