import { HomeComponent } from './home.component';
import { ApiServiceService } from '../api-service.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let apiServiceMock = {} as ApiServiceService;

  it('teste da funcao filtrar',() => {
    // Given mocks estejam ok
    component = new HomeComponent(apiServiceMock);
    apiServiceMock.getTeams = jest.fn();
    component.teamsData = { data: [{ full_name: "Alexandre" }, { full_name: "Elzio" }] };

    // When 
    component.filtrar("ale");

    // Then
    expect(component.teamsFiltered).toEqual([{ full_name: "Alexandre" }]);
  });
});
