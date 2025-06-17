import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { cn } from './utils.js'

describe('cn', () => {
  it('combines multiple classes', () => {
    assert.equal(cn('foo', 'bar'), 'foo bar')
  })

  it('ignores falsey values', () => {
    assert.equal(cn('foo', false as any, null as any, undefined, 'bar'), 'foo bar')
  })

  it('merges tailwind utility classes', () => {
    assert.equal(cn('p-2', 'p-4'), 'p-4')
  })
})
