class DNASequencer {
  constructor(dnaStrand = '') {
    this.dnaStrand = dnaStrand
  }

  getRnaStrand() {
    return [...this.dnaStrand].map(this.getRnaComplement).join('')
  }

  getRnaComplement(dnaNucleotide) {
    switch (dnaNucleotide) {
      case 'G': return 'C'
      case 'C': return 'G'
      case 'T': return 'A'
      case 'A': return 'U'
      default: return ''
    }
  }
}

const dnaSequencer = (dnaSequence) => {
  const myDNASequencer = new DNASequencer(dnaSequence)

  return myDNASequencer.getRnaStrand()
}

export default dnaSequencer;