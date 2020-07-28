export function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
export class StorageSaqhanPromo {
    static get prefix() {
        return this.prefix_;
    }
    static set prefix(val) {
        this.prefix_ = val;
    }
}
