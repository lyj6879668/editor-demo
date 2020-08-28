let editor_id = 1

class Editor {
    public id: string
    constructor(doom) {
        this.id = `editor-${editor_id++}`
        if(doom == null) {
            throw new Error('未指定doom元素')
        }
    }
    public create(): void {
        console.log('123')
    }
}

export default Editor
