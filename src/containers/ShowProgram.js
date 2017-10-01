import { connect } from 'react-redux'
import { fetchShowProgramRequest } from 'store/actions'
import { ShowProgram } from 'components'

export const mapStateToProps = state => ({
  // showProgram: state.showProgram
  showProgram:
  [
    {
        "id": 1,
        "name": "Макс Бавлянов",
        price: "600",
        "description": "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        "address": "г.Бишкек Асанбай",
        "phone": "+996550778133",
        "photo": "photographer1.jps"
    },

  ]
})

export const mapDispatchToProps = (dispatch) => ({
  fetchShowProgramRequest: () => dispatch(fetchShowProgramRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgram)
