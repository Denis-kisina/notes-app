import validator from 'validator'
import yargs from 'yargs'
import notesUtil from './notes.js'

const y = yargs()
y.version('1.1.0')

y.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.addNote(argv.title, argv.body)
    }
})

y.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.removeNote(argv.title)
    }
})

y.command({
    command: 'list',
    describe: 'List all your notes.',
    handler() {
        notesUtil.listNotes()
    }
})

y.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtil.readNote(argv.title)
    }
})

y.parse(process.argv.slice(2))
