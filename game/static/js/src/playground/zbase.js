class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`
<div>Game Page</div>
`);

        this.hide();
        this.root.$ac_game.append(this.$playground);
    
        this.start();
    }

    start() {
    }

    update() {
    }

    show() { // open playground page
        this.$playground.show();
    }

    hide() { // close playground page
        this.$playground.hide();
    }
}
