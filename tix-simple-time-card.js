class TixSimpleTimeCard extends HTMLElement {

    setConfig(config) {

        const defaultConfig = {
            'use_24h': true,
            'show_seconds': false,
        }

        this.config = {
            ...defaultConfig,
            ...config
        };

    }

    getCardSize() {
        return 1;
    }

    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    startTime() {
        var today = new Date(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds(),
            p = (h < 12) ? "AM" : "PM";

        m = this.addZero(m);
        s = this.addZero(s);

        let time_str = (this.config.use_24h ? h : h % 12) + ":" + m +
            (this.config.show_seconds ? ":" + s : "") +
            (this.config.use_24h ? " " : " " + p);

        this.content.innerHTML = time_str;

    }

    set hass(hass) {

        if (!this.content) {
            const card = document.createElement('HA-card');
            this.content = document.createElement('div');
            this.content.style.padding = '16px';
            this.content.style.fontSize = '4rem';
            this.style.textAlign = 'center';
            this.content.style.display = 'inline-block';
            card.appendChild(this.content);
            this.appendChild(card);
        }
        this.startTime();
        setInterval(this.startTime.bind(this), 250);
    }

}

customElements.define('tix-simple-time-card', TixSimpleTimeCard);
