class Regexp {
    singleAttrIdentifier = /([^\s"'<>/=]+)/;
    singleAttrAssign = /(?:=)/;
    singleAttrValues = [
        // attr value double quotes
        /"([^"]*)"+/.source,
        // attr value, single quotes
        /'([^']*)'+/.source,
        // attr value, no quotes
        /([^\s"'=<>`]+)/.source
    ];
    attribute = new RegExp(
        '^\\s*' + this.singleAttrIdentifier.source +
        '(?:\\s*(' + this.singleAttrAssign.source + ')' +
        '\\s*(?:' + this.singleAttrValues.join('|') + '))?'
    );
    ncname = '[a-zA-Z_][\\w\\-\\.]*';
    qnameCapture = '((?:' + this.ncname + '\\:)?' + this.ncname + ')';
    startTagOpen = new RegExp('^<' + this.qnameCapture);
    startTagClose = /^\s*(\/?)>/;
    endTag = new RegExp('^<\\/' + this.qnameCapture + '[^>]*>');
    doctype = /^<!DOCTYPE [^>]+>/i;
    comment = /^<!--/;
    conditionalComment = /^<!\[/;
}

export default new Regexp();