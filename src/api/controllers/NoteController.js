import Note from '../models/Note';

module.exports = {

    async store(req, res){

        // PEGA OS DADOS PELO CORPO DO HTML E CONSTROI UM OBJ COM ELES
        const obj = {
            userId: req.body.userId,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
        }
        
        console.log('1: objeto store: ', obj);

        const note = await Note.create(obj);

        console.log('2: nota store: ', note);

        console.log('3: res', {
            timestamp: Date.now(),
            ok: true,
            data: note
        });

        // STATUS 200 SIGNIFICA OK
        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },

    async update(req, res){
        const noteId = req.params.id;
        console.log('1: objeto update: ', obj);

        const obj = {
            userId: req.body.userId,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
        }

        const note = await Note.update(obj, { where: { id: noteId }});

        console.log('2: nota update: ', note);

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },

    async show(req, res){
        const noteId = req.params.id; // PARÂMETRO VEM PELO MÉTODO GET
        const note = await Note.findByPk(noteId); // BUSCANDO NO BD PELA ID DA NOTA

        return res.status(200),json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note 
            }
        )
    },

    async list(req, res){
        const noteList = await Note.findAll(
            {
                include: [
                    { association: 'user' }
                ],
            });

        return res.status(200),json(            
            //CRIANDO UM OBJETO
            {
                timestamp: Date.now(),
                ok: true,
                data: noteList
            }
        )
    },

    async delete(req, res){
        const id = req.params.id;
        const note = await Note.destroy({ where: {id: id}});

        console.log('Nota que será deletada: ', note)

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },
};