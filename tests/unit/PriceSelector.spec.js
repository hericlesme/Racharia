import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import PriceSelector from '@/components/PriceSelector.vue'

describe('PriceSelector', () => {
    const wrapper = mount(PriceSelector)

    it('renders the correct markup', () => {
        expect(wrapper.html()).contain('select')
    })

})
