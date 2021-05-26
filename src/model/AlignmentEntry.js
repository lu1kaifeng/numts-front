export default class AlignmentEntry {
    PercentageOfIdentity;
    Numts_ID;
    alignedSequenceList=[];
    constructor(source) {
        this.alignedSequenceList = source.alignedSequenceList;
        this.Numts_ID = source.numts_ID;
        this.PercentageOfIdentity = source.percentageOfIdentity;
    }
}
