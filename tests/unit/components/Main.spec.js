import Main from '@/components/Main.vue'

// TODO render test

describe('Main.vue', () => {
  it.each([
    ['A', 1],
    ['Y', 25],
    ['Z', 26],
    ['AA', 27],
    ['AY', 51],
    ['AZ', 52],
    ['BA', 53],
  ])('A1:%s -> R1C1:%i', (a1, r1c1) => {
    const localThis = { a1 }

    expect(Main.computed.toR1C1.call(localThis)).toBe(r1c1)
  })

  it('R1C1 -> A1', () => {
    const localThis = { r1c1: '25', convertR1C1toA1 () { return 'Y' } }

    expect(Main.computed.toA1.call(localThis)).toBe("Y")
  })

  it.each([
    [1, 'A'],
    [25, 'Y'],
    [26, 'Z'],
    [27, 'AA'],
    [51, 'AY'],
    [52, 'AZ'],
    [53, 'BA'],
  ])('R1C1:%i -> A1:%s', (r1c1, a1) => {
    expect(Main.methods.convertR1C1toA1(r1c1)).toBe(a1)
  })
})