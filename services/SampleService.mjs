class SampleService {
  /**
   * @type {SampleService | null}
   * */
  static instance = null;


  constructor() {}

  static getInstance() {
    if (SampleService.instance) {
      return SampleService.instance;
    }

    SampleService.instance = new SampleService();
    return SampleService.instance;
  }

  async init() {
    throw new Error('Method not implemented');
  }
}

const sampleService = SampleService.getInstance();

export default sampleService;
